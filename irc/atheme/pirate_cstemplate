#!/usr/bin/env bash
# This script is modified version of `cstemplate` intended to use of
# Pirate Party Finland (Piraattipuolue) who aren't used to doing everything
# with services and don't suffer from as high level of paranoia as I do ;)
# (/cs help set secure, "This is useful if you're paranoid")
# Unlike the other script, this one assumes your network is running
# Charybdis as that is what PirateIRC is using.

# This script generates commands which can be copy-pasted to Atheme's
# ChanServ to set templates which can later be set with flags.

# With these templates, bots and ops are opped and (trusted) users are
# voiced. I am not fully sure where I took the word "users", but it's good
# enough.

## https://mikaela.info/english/2015/09/19/atheme-quickstart.html
## would be good to read before this script in order to possibly get more
## out of it.

## ChanServ settings
# Allows everyone to see ACL changes. -- We believe in transparency.
echo "/cs set $1 VERBOSE ON"

# Tell ChanServ to be on the channel. Not needed for larger channels which
# possibly includes all pirate channels as most of people have 24/7
# connections or talk with bots.
#echo "/cs set $1 GUARD ON"

# Adjusts ChanServ MLOCK
# TL;DR Blocks messages from people not in channel, requires op for
# changing topic, anyone can use /invite and no one can /ctcp #CHANNEL
# (ACTION is naturally exception). On the other side, the channel cannot
# be made invite-only, size limit cannot be set (use +j JOINS:SECONDS
# instead) and passsKEY cannot be set. Those are the restricting modes
# that are too easy to set by accident and may cause harm.
# * n — no external messages, you must be on the channel to message it.
# * t — you must be op to change topic
# * g — anyone can /invite
# * C — block CTCPs to channel
# * * * * *
# * i — invite-only
# * l — limit maximum number of people on the channel
# * k — key/password for joining the channel
# To remove MLOCK "/cs set #channel MLOCK"
echo "/cs set $1 MLOCK +ntgC-ilk"

# Show "various information" about the channel when requested. I am not
# sure what this "various information" exactly is as the help text says
# only that.
echo "/cs set $1 PRIVATE OFF"

# Don't sync flags when they are changed. If this was OFF, people who were
# opped without being identified would be deopped and especially this makes
# PPFI unhappy.
echo "/cs set $1 NOSYNC ON"

# Don't protect from paranoia or accidental opping of people who haven't
# identified to NickServ (nick thiefs?).
echo "/cs set $1 SECURE OFF"

# Allow topic to be changed by ops (+t) or anyone (-t) instead of requiring
# being identified and having +t flag with ChanServ.
echo "/cs set $1 TOPICLOCK OFF"

# Looks interesting, needs investigation: /msg ChanServ help set ANTIFLOOD

## ChanServ templates

# I think this part would just be confusing as roughly the same can be
# archieved with the default templates (/msg ChanServ TEMPLATE) with the
# exception of R that shouldn't be used in most of cases anyway.

## Setting flags

# Everything is done with GroupServ, so it's enough to grant access to the
# group.
echo "/cs flags $1 !piraatti-opit AOP"

# Allow everyone to see flags/access list of the channel as it's often
# desirable to know which people are ops and majority of us aren't
# registered (sadly).
echo "/cs flags $1 *!*@* +A"

## How GroupServ is configured
# We have group !piraatti-opit (as revealed earlier) that is closed
# (/msg GroupServ set !piraatti-opit open off).
# 
# The founder currently has flags +FfscmviA and normal ops are given
# +cmvA. There are also $oper and bot with +cA and $registered with +A.

# $oper membership comes from freenode where opers don't want to do
# anything even in case of bigger spam attacks even if all ops are away
# unless they have access through ChanServ. Even without being listed $oper
# would be able to do anything.

# If there were multiple people with access to modify the group they would
# be given flags +cmvAfs if not also +F.

# * c - use ChanServ flags set to the group
# * m - read memos sent to the group (I am thinking of /msg MemoServ help
#       sendops)
# * v - take vhosts offered to the group through HostServ (doesn't seem
#       to be happening though)
# * A - see the group members and who can do what
# * * * * *
# * f - allow managing access list (un/setting only the flags you have).
# * s - allow using GroupServ SET command
# * F - full founder access

# Examples:
# making JokuOperaattori op across the channels where !piraatti-opit has
# AOP template:
# /msg GroupServ flags !piraatti-opit JokuOperaattori +cmvA
# making VaraPuheenjohtaja have access to edit access
# /msg GroupServ flags !piraatti-opit VaraPuheenjohtaja +cmvAfs

# Issue: Flags are set after nosyc is enabled.
# Ugly solution: SYNC manually afterwards. Don't run this assuming the
# channel already has ops outside of ChanServ/GroupServ.
echo "/cs sync $1"
